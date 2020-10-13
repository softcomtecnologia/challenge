import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import * as yup from 'yup'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
	Toolbar,
	Paper,
	Checkbox,
	IconButton,
	Tooltip,
	Typography,
	FormGroup,
	TextField,
	Button
} from '@material-ui/core';
import * as Lodash from 'lodash'
import ItemsMiddleware from '../../middlewares/items'
import EditIcon from '@material-ui/icons/EditRounded'
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { red } from '@material-ui/core/colors';


interface Data {
	id: number;
	name: string;
	price: number;
	createdAt: Date;
	updatedAt: Date;
}

type Order = 'asc' | 'desc';

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
	align: 'right' | 'left' | 'center'
}

const headCells: HeadCell[] = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'name', align: 'left' },
	{ id: 'price', numeric: true, disablePadding: true, label: 'price', align: 'left' },
	{ id: 'createdAt', numeric: false, disablePadding: true, label: 'created at', align: 'left' }
];

interface EnhancedTableProps {
	classes: ReturnType<typeof useStyles>;
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				<TableCell padding="none">

				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.align}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const useToolbarStyles = makeStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
		},
		highlight:
			theme.palette.type === 'light'
				? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85),
				}
				: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark,
				},
		title: {
			flex: '1 1 100%',
		},
	}),
);

interface EnhancedTableToolbarProps {
	numSelected: number;
	plusOnClick: () => void;
	deleteSelectedItems: () => void;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
	const classes = useToolbarStyles();
	const { numSelected, deleteSelectedItems } = props;

	return (
		<Toolbar
			className={classnames(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : ''}
			{numSelected > 0 ? (
				<Tooltip title="Click to delete selected items">
					<IconButton aria-label="delete" onClick={deleteSelectedItems}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
					<Tooltip title="Click to create new item">
						<IconButton aria-label="filter list" onClick={props.plusOnClick}>
							<PlusOneIcon /> <Typography>New Item</Typography>
						</IconButton>
					</Tooltip>
				)}
		</Toolbar>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		paper: {
			width: '100%',
			marginBottom: theme.spacing(2),
		},
		table: {
			minWidth: 750,
		},
		visuallyHidden: {
			border: 0,
			clip: 'rect(0 0 0 0)',
			height: 1,
			margin: -1,
			overflow: 'hidden',
			padding: 0,
			position: 'absolute',
			top: 20,
			width: 1,
		},
		ModalForm: {
			marginTop: theme.spacing(1),
			width: '100%'
		},
		ModalFormGroup: {
			marginTop: theme.spacing(2)
		},
		ModalFormSubmit: {
			margin: theme.spacing(3, 0, 2)
		},
		ErrorModalForm: {
			textAlign: 'center',
			color: red[100]
		},
	}),
);

export default function EnhancedTable() {
	const classes = useStyles();
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<keyof Data>('name');
	const [selected, setSelected] = useState<number[]>([]);
	const [rows, setRows] = useState<Data[]>([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [itemIndexEdit, setItemIndexEdit] = useState<number | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [initialModalValues, setInitialModalValues] = useState<Data>({} as Data)

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.id);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected: number[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleClickEdit = (event: React.MouseEvent<unknown>, item: Data, index: number) => {
		setItemIndexEdit(index)
		setInitialModalValues(item)
		handleShowModal()
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value));
		setPage(0);
	};

	const isSelected = (id: number) => selected.indexOf(id) !== -1;

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	const load = async () => {
		let response = await ItemsMiddleware.getAllItems(page, rowsPerPage, orderBy, order)
		setLoading(false)
		setRows(response.data.items)
		setTotal(response.data.total)
	}

	const handleShowModal = () => {
		setShowModal(!showModal)
	}

	const handleDeleteItem = async (event: React.MouseEvent<unknown>, item: Data, index: number) => {
		await ItemsMiddleware.remove(item)
		let rowsCopy = rows.filter(i => i.id !== item.id)
		setRows(rowsCopy)
	}

	const deleteSelectedItems = async () => {

		await ItemsMiddleware.removeItems(selected.toString())
		let rowsCopy = rows.filter(i => selected.indexOf(i.id) === -1)
		setRows(rowsCopy)
	}

	const newItem = () => {
		setItemIndexEdit(null)
		setInitialModalValues({} as Data)
		handleShowModal()
	}

	useEffect(() => {
		load()
	}, [page, rowsPerPage])

	if (loading) {
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Loader />
				</Paper>
			</div>
		)
	}

	const handleModalSubmit = async (values: Data, actions) => {

		if (itemIndexEdit !== null) {
			let copyRows = [...rows]
			await ItemsMiddleware.update(values)
			copyRows[itemIndexEdit] = values
			setRows(copyRows)
		} else {
			let response = await ItemsMiddleware.create(values)
			let newItem = response.data as Data
			setRows([...rows, newItem])
		}

	}

	const validations = yup.object().shape({
		name: yup.string().required(),
		price: yup.number().required()
	})

	return (
		<div className={classes.root}>
			<Modal show={showModal} onClose={handleShowModal}>

				<Formik
					initialValues={initialModalValues}
					onSubmit={handleModalSubmit}
					validationSchema={validations}
				>
					<Form className={classes.ModalForm}>
						<FormGroup className={classes.ModalFormGroup}>
							<Field
								name="name"
								component={({ field, form, ...props }) => <TextField placeholder="name" type="text" fullWidth {...field} {...props} />}
							/>
							<ErrorMessage name="name" className={classes.ErrorModalForm} />
						</FormGroup>
						<FormGroup className={classes.ModalFormGroup}>
							<Field
								name="price"
								component={({ field, form, ...props }) => <TextField placeholder="price" type="numeric" fullWidth {...field} {...props} />}
							/>
							<ErrorMessage name="price" className={classes.ErrorModalForm} />
						</FormGroup>
						<Button
							fullWidth
							className={classes.ModalFormSubmit}
							type="submit"
							disabled={loading}
							variant="contained"
							color="primary"
							data-testid="login-button"
						>
							Save
        			</Button>
					</Form>
				</Formik>
			</Modal>
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={selected.length} plusOnClick={newItem} deleteSelectedItems={deleteSelectedItems} />
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={'small'}
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{rows
								.map((row: Data, index) => {
									const isItemSelected = isSelected(row.id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.id}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													onClick={(event) => handleClick(event, row.id)}
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell padding="none">
												<IconButton
													onClick={(event) => handleClickEdit(event, row, index)}
													size="small"
													color="primary"
													aria-label="edit"
													component="span">
													<EditIcon />
												</IconButton>
												<IconButton
													onClick={(event) => handleDeleteItem(event, row, index)}
													size="small"
													color="primary"
													aria-label="edit"
													component="span">
													<DeleteIcon />
												</IconButton>
											</TableCell>
											<TableCell align="left" id={labelId} scope="row" padding="none">{row.name}</TableCell>
											<TableCell align="left">{row.price}</TableCell>
											<TableCell align="left">{row.createdAt}</TableCell>

										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: (33) * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={Lodash.range(0, 50, 5)}
					component="div"
					count={total}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}
