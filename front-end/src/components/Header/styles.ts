import styled from "styled-components";
import { HiShoppingCart, HiOutlineClock } from 'react-icons/hi';
import { FaMotorcycle } from "react-icons/fa";


export const Container = styled.div`
  
  margin-top: 40px;
  width: 100%;
  height: 200px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;


`;

export const Profile = styled.div`  
  display: flex;
  align-items: center;

  > img{
    width: 142px;
    height: 142px;
    margin-left: 3rem;
    border: 2px solid var(--color-background);
    border-radius: 50%;
    cursor: pointer;
  }

`;

export const ProfileInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  > div{
      display: flex;
      align-items: center;
    >h2{
      margin-bottom: 10px;
    }

    >span{
      display: flex;
      align-items: center;
      font-size: 10px;
      margin-left: 2.5rem;
      padding-bottom: 10px;
      font-weight: 700;
      color: var(--color-dark-green);
    }

    > .close{
      color: red;
    }

  }

  .edress {
    margin-bottom: 10px;

    > span{
      color: var(--color-dark-gray);
      font-weight: 500;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }

`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;

  >div{

    strong{
      font-weight: 700;
      margin-right: 0.2rem
    }
  }

  .value{
    margin-left: 3rem;
  }
  
`;

export const Cart = styled.div`
  padding: 1rem;
  display: flex;

  position: relative;

  >div{
    flex-direction: column;
  }
  > div::before{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 120px;
    border-left: 1px solid var(--color-gray100);
  }

  .qtdProducts{
    font-weight: 500;
    font-size: 18px;
  }

  .price{
    color: var(--color-background);
    font-weight: 700;
    font-size: 20px;
  }

`;

export const CartIcon = styled(HiShoppingCart)`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;

export const MotoIcon = styled(FaMotorcycle)`
  width: 19px;
  height: 12px;
`;

export const ClockIcon = styled(HiOutlineClock)`
  width: 10px;
  height: 10px;
  margin-right: 4px
`;
