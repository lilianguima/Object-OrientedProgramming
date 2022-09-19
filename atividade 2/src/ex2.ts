class Plane {
    public weight: number   //peso
    public year: number    //ano
    public model: string //modelo
    public velocity: number //velocidade

}   const plane : Plane = new Plane
    plane.weight = 800
    plane.model ='Sikorsky Ilya Muromets'
    plane.year = 1913
    plane.velocity = 110 

    console.log(`Airplane Model: ${plane.model}`) //modelo do avião
    console.log(`Year of the plane: ${plane.year}`) //ano do avião
    console.log(`plane speed: ${plane.velocity}`) //velocidade do avião
    console.log (`plane weight: ${plane.weight}`) //peso do avião 

