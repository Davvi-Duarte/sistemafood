import { Container } from "./styles"

import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar(){
  return <Container>
    <button type="button">
      <img src={menuImg} alt="Abrir e fechar o menu" />
      </button>
    <nav>
      <ul>
        <li>
          <a>
            <BurguerIcon /> <span>Hamburgueres</span>
          </a>
        </li>
        <li>
          <a>
            <PizzaIcon /> <span>Pizzas</span>
          </a>
        </li>
        <li>
          <a>
            <SodaPopIcon /> <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a>
            <IceCreamIcon /> <span>Sorvetes</span>
          </a>
        </li>
      </ul>
    </nav>
  </Container>
}
