using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DesafioTrilhaDoConhecimento.Views.UserControls
{
    public partial class CabecalhoPadrao : UserControl
    {
        public CabecalhoPadrao()
        {
            InitializeComponent();
        }

        #region Criando as chamadas dos Eventos
        public event EventHandler OnButtonCloseClick;
        public event EventHandler OnButtonNewClick;
        public event EventHandler OnButtonSaveClick;
        #endregion

        #region Evento para mover o Form onde será usado o UserControl
        public Form DragForm { get; set; }

        private bool _dragging = false;
        //private Point _offset;
        private Point _start_point = new Point(0, 0);
        private void tblLayoutPrincipal_MouseDown(object sender, MouseEventArgs e)
        {
            _dragging = true;
            _start_point = new Point(e.X, e.Y);
        }

        private void tblLayoutPrincipal_MouseMove(object sender, MouseEventArgs e)
        {
            if (_dragging)
            {
                Point p = PointToScreen(e.Location);
                DragForm.Location = new Point(p.X - this._start_point.X, p.Y - this._start_point.Y);
            }
        }

        private void tblLayoutPrincipal_MouseUp(object sender, MouseEventArgs e)
        {
            _dragging = false;
        }
        #endregion

        #region LogoMarca
        private Bitmap _LogoMarca;
        public Bitmap Icone
        {
            get { return _LogoMarca; }
            set
            {
                if (_VisibleLogoMarca)
                {
                    _LogoMarca = value;
                    if (_LogoMarca != null)
                        imgLogoSoftcom.Image = _LogoMarca;
                }
            }
        }

        private bool _VisibleLogoMarca;
        public bool VisibleLogoMarca
        {
            get { return _VisibleLogoMarca; }
            set
            {
                _VisibleLogoMarca = value;
                imgLogoSoftcom.Visible = _VisibleLogoMarca;
            }
        }
        #endregion

        #region Botão Fechar
        //private bool _VisibleButtonClose;
        //public bool VisibleButtonClose
        //{
        //    get { return _VisibleButtonClose; }
        //    set
        //    {
        //        _VisibleButtonClose = value;
        //        btnFechar.Visible = _VisibleButtonClose;
        //    }
        //}
        private void btnFechar_Click(object sender, EventArgs e)
        {
            if (OnButtonCloseClick != null)
            {
                OnButtonCloseClick(this, EventArgs.Empty);
                return;
            }

            this.DragForm.Close();
        }
        #endregion

        #region Botão Novo
        private bool _VisibleButtonNew;
        public bool VisibleButtonNew
        {
            get { return _VisibleButtonNew; }
            set
            {
                _VisibleButtonNew = value;
                btnNovo.Visible = _VisibleButtonNew;
            }
        }
        private void btnNovo_Click(object sender, EventArgs e)
        {
            if (OnButtonNewClick != null)
            {
                OnButtonNewClick(this, EventArgs.Empty);
                return;
            }
        }
        #endregion

        #region Botão Salvar
        private bool _VisibleButtonSave;
        public bool VisibleButtonSave
        {
            get { return _VisibleButtonSave; }
            set
            {
                _VisibleButtonSave = value;
                btnSalvar.Visible = _VisibleButtonSave;
            }
        }
        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if (OnButtonSaveClick != null)
            {
                OnButtonSaveClick(this, EventArgs.Empty);
                return;
            }
        }
        #endregion

        #region Label Id
        private bool _VisibleLblId;
        public bool VisibleLblId
        {
            get { return _VisibleLblId; }
            set
            {
                _VisibleLblId = value;
                lblId.Visible = _VisibleLblId;
                lblRegistro.Visible = _VisibleLblId;
            }
        }
        
        private int _LblId;
        public int LblId
        {
            get { return _LblId; }
            set
            {
                _LblId = value;
                lblId.Text = Convert.ToString(_LblId);
            }
        }
        #endregion

    }
}
