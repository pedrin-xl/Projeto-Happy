const  Database  =  require ( "./db" ) ;
const  saveOrphanage  =  require ( "./saveOrphanage" ) ;

 Database. then(async  ( db )  =>  {
  // inserir dados na tabela

  await  saveOrphanage ( db ,  {
    lat : "-27.222633" ,
    lng : "-49.6455874" , 
    name : "Lar das Meninas" ,
    about : "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e / ou vulnerabilidade social." ,
    whatsapp : "859595242" ,
    images : [
        "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" ,
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" ,
    ] . toString ( ) ,
    instructions : "Venha como se sentir a vontade e traga muito amor e paciência para dar" ,
    opening_hours : "Horário de visitas das 8h às 18h" ,
    open_on_weekends : "0"
  } )

  // consultar dados na tabela
  const  selectedOrphanages  =  await  db . all ( "SELECT * FROM orphanages" ) ;
  console . log ( selectedOrphanages ) ;

  // consultar orfanato para id
    const orphanage =  await  db.all ( 'SELECT * FROM orphanages WHERE id = "2"' ) ;
  console . log ( orphanage ) ;

 /*  // excluir dados na tabela

  console.log (await db.run ("EXCLUIR DOS orfanatos WHERE id = '6'"))
  console.log (await db.run ("EXCLUIR DOS orfanatos WHERE id = '7'")) */

 })  
