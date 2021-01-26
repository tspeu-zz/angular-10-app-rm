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

   ionic capacitor add android
   ng build
   npx cap open android

   ionic capacitor copy android
   ionic capacitor run android -l ->without ng build

   capacitor.config.json
#"appId": "com.jm.ionic.angular.course",

   @android studio->create emulator->

   ROUTER-> navigations
   angular router->
   ionic stack of pages-> ions SctackController.

   Ionic NavController para interacuar con el stack of pages. 
   Ionoc cache pages*>
   bug al borrar un recipe.
   Ionic Pages life cicle
   ngOnInit->

               ionic Pages
      ionViewWillEnter -> *despues de ngOnInit cuando  la page es visible->
                           *se ejecuta justo despues que el contenido de la page se ha cargado y se muestra
      IonViewDidEnter-> se ejecuta justo despues. cuando la page es visible
*por eso no se destruye , poque esta en el stack de las pages.

      IonViewWillLeave->para limpiar, cuando la pagina es invisible y hay otra page en el top del         stack
      IonViewDidLeave->

   ngOnDestroy->cuando se sale del componente
   
*
tabs navigation->
separadas navigation stack por cada tab