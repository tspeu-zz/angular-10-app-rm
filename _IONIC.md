#state management


tres tipos de compontnets.

Componentes output
ion-img, ion-badge, ion-loading, ion-label, ion-title
ion-toolbar, ion-alert, ion-toast, ion-modal

componentes layout
ion-grid, ion-row, ion-col, ion-card, ion-list, ino-infiniti-scroll,
ion-tabs

compontes input
ion-button, ion-input, ion-textarea, ion-menu, ion-select, 
ion-datetime, ion-fab, ion-toggle

web componentes slots-> lugar dntro del componente donde se guarda un espacio para colocarse>

class ion-text...
utilities class changed

https://ionicframework.com/docs/api/alert
##2
ionic/angular makes usae in Angular easier/more efficient
 IonicModule.forRoot() incluye todos los core web components

 #ionic g pages -> is like angular module with components & routing attach.

 navegar desde la vista  pasando la url Actual y un id->
  [routerLink]="['/recetas', r.id]"
  la ruta absoluta y el parametro
  ... en la pagina que recibe el parametro->
   this.activeRoute.paramMap.subscribe(paraMap =>{
      //nombre del paramatro en el routing.Module
      const id = paraMap.get('recetaId');
   })

   al añadir un angulkar component, que no es un ionic page.
   se debe importar en el modulo que se va a utilizar , solo en ese modulo.