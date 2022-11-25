import BasicLayout from "../layouts/BasicLayout"
import { ListProducts } from "../components/ListProducts/ListProducts"
import {Title} from "../components/General/Title"

export default function Home() {
  return (
    <BasicLayout>
      <Title/>
      <ListProducts/>
    </BasicLayout>
  )
}
