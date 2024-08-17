import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: "burger",
      name: "Mega",
      description: "Nosso Mega",
      price: 25.5,
      image: "https://i.imgur.com/upjIUnG.jpg",
    },
    {
      id: 2,
      snack: "burger",
      name: "Super",
      description: "Nosso Super",
      price: 25.5,
      image: "https://i.imgur.com/B4J04AJ.jpg"
    },
  ]

  console.log(data)

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Hambúrgueres" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data} />
    </>
  )
}
