import { useAppContext } from '@/app/Context/store';
import React from 'react';
import OperatorItem from '../operatorItem/OperatorItem';
import styled from 'styled-components'


// styled-components

const Menu = styled.div`
transition: 0.3s;    
`

const MenuList = styled.ul`
padding: 10px;
width: 760px;
border-radius: 20px;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
background-color: rgb(255 255 255);
margin: 0 auto;
list-style-type: none;

@media (max-width: 821px) {
  width: 736px;
  }

@media (max-width: 769px) {
  width: 682px;
}

@media(max-width:541px) {
  width: 463px;
}

@media (max-width: 480px) {
 width: 320px;
}
`

const CloseButton = styled.button`
background-color: transparent;
  border: none;
  margin-bottom: 20px;
  transition: 0.4s;
  &:hover {
    color: red;
  }
`

/* Main */

export default function NavMenu(props: { onClose: React.MouseEventHandler<HTMLButtonElement>; }) {

  const { isAdded, setAdded, onAddToCart } = useAppContext()

  const list = [{
    id: 4,
    name: 'Теле2',
    logo: 'https://static.tildacdn.com/tild6236-6534-4239-a262-346433393761/maxresdefault.jpg',
    description: 'Оплата услуг сотовой связи',

  },
  {
    id: 5,
    name: 'Yota: сотовая связь',
    logo: 'https://akket.com/wp-content/uploads/2018/03/Yota-Russia-0.jpg',
    description: 'Оплата услуг сотовой связи',

  },
  {
    id: 6,
    name: 'Тинькофф Мобайл',
    logo: 'https://sun9-26.userapi.com/impf/c858020/v858020957/bf5eb/M9RUQtKYQa0.jpg?size=600x600&quality=96&sign=2535e8d725eab5a41bf157e19679c1eb&c_uniq_tag=KOo_INZKHmjOogwPZdjmOFy57yxAfm-t6hNPsVXUjr8&type=album',
    description: 'Оплата услуг сотовой связи',

  },
  {
    id: 7,
    name: 'СберМобайл',
    logo: 'https://play-lh.googleusercontent.com/EScMq4WzsOVFhZOaaI8NE9Tdjcy5oi9DfKkdW-i3wFmy-ZMYEtdpNfHUoupsZ9xqFg=h500',
    description: 'Оплата услуг сотовой связи',

  }
  ]


  return (
    <>
      <Menu>

        <MenuList>

          <CloseButton onClick={props.onClose}> X </CloseButton>

          {list.map((post) => (
            <OperatorItem
              key={post.id}
              name={post.name}
              logo={post.logo}
              description={post.description}
              onPlus={(obj: any) => onAddToCart(obj)}
            />))}

        </MenuList>

      </Menu>

    </>
  )
}

