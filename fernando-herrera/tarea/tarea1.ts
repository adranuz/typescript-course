(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza {
      flash = 5,
      superman = 100,
      batman = 1,
      acuaman = 0,
    }
    const flashFuerza: Fuerza = Fuerza.flash
    const supermanFuerza: Fuerza = Fuerza.superman
    const batmanFuerza: Fuerza = Fuerza.batman
    const acuamanFuerza: Fuerza = Fuerza.acuaman
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda():void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder as number;
    console.log( largoDelPoder);
  
  
  })()
  
  