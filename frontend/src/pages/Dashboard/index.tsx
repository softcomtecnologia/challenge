import React, { useState, useCallback, useEffect } from 'react';
import { FiPower, FiPlusCircle, FiTrash2, FiEdit } from 'react-icons/fi';
import { useHistory, Link} from 'react-router-dom';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Head, Item } from './styles';

interface Item {
  id: string;
  user_id: string;
  name: string;
  description: string;
  price: number;
}

const Dashboard: React.FunctionComponent = () => {
  const token = localStorage.getItem('@VirtualStore:token')  || '{}';
  const user = JSON.parse(localStorage.getItem('@VirtualStore:user') || '{}');

  const [ items, setItems ] = useState<Item[]>([]);
  const { logout, delItem } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    api.get(`api/v1/user/${user.id}`, { 
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      setItems(response.data.items)
    })
  }, [user.id, token]);


  const handleLogout = useCallback(async () => {
    await logout();

    history.push('/');
  }, [logout, history]);


  const handleDelete = useCallback(async (id: string, itemId: string, token: string) => {
    await delItem({ id, itemId, token });

    addToast({
      type: 'success',
      title: `Deleted success`,
      description: 'Item successfully deleted',
    });

    setItems(i => i.filter(item => item.id !== itemId))

  }, [addToast, delItem]);

  return (
    <Container>
      <Head>
        <div id="header">
          <img src={ logoImg } alt="logo"/>

          <div id="welcome">
            <span>Welcome,</span>
            <span>{ user.name }</span>
          </div>
        </div>
        <div onClick={handleLogout} id="logout">
          <FiPower size={18} />
        </div>
      </Head>
      <Content>
        <div id="title">
          <h2>List of items</h2>

          <Link to='/add'>
            <FiPlusCircle 
              size={28} 
              color="#FF9000" 
              cursor="pointer" 
            />
          </Link>
        </div>

        <div id="items">
          { items.map(item => (
            <Item key={item.id}>
              <div id="title-item">
                <p id="name">{item.name}</p>
                <div id="options">
                  <Link 
                    onClick={() => {localStorage.setItem('@VirtualStore:itemId', item.id);}} 
                    to='/change'
                  >
                    <FiEdit 
                      size={14}
                      cursor="pointer"
                      color="#F4EDE8" 
                    />
                  </Link>

                  <FiTrash2 
                    onClick={() => handleDelete(user.id, item.id, token)} 
                    size={14}
                    cursor="pointer"
                  />
                </div>
              </div>
              <div id="body-item">
                <p id="description">
                  { item.description }  
                </p>
                <p id="price">$ { item.price }</p>
              </div>
            </Item>
          )) }
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;