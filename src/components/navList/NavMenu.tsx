import { useGlobalContext } from '@/app/Context/store';

import React from 'react';
import OperatorItem from '../operatorItem/OperatorItem';

import styles from './NavMenu.module.css';


export default function NavMenu(props: { onClose: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {



  const {isAdded, setAdded, onAddToCart} = useGlobalContext()
  

  const list = [{
    id: 4,
    name: 'Теле2',
    logo: 'https://static.tildacdn.com/tild6236-6534-4239-a262-346433393761/maxresdefault.jpg',
    description: 'Прямое пополнение мобильных телефонов Теле2 (Россия).',
    
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
      <div className={styles.menu}>

        <ul className={styles.menu__list}>

          <button onClick={props.onClose} className={styles.close__button}> X </button>
          {list.map((post: any) => (
            <OperatorItem
              key={post.id}
              name={post.name}
              logo={post.logo}
              description={post.description}
              onCloseButton={() => setAdded(!isAdded)}
              onPlus={(obj:any) => onAddToCart(obj)}
            />))}
        </ul>
      </div>

    </>
  )
}

