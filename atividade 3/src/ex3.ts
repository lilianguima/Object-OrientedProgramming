// classe produto eletrônico e apresente os atributos e métodos 

class electronicProduct {
    public category: string  //categoria
    public model : string  //modelo
    public color : string //cor

} const electronicproduct: electronicProduct = new electronicProduct ()
    electronicproduct.category = 'Notebook'
    electronicproduct.model = 'Lenovo'
    electronicproduct.color= 'Prata'

    console.log(`Product category: ${electronicproduct.category}`)
    console.log(`Product model: ${electronicproduct.model}`)
    console.log(`Product color: ${electronicproduct.color}`)
