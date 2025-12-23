import { Routes } from '@angular/router';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ExamenesComponent } from './componentes/cuestionariohabilidades/examenes.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPrincipalComponent } from './componentes/menuprincipal/menuprincipal.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ModificarPerfilComponent } from './componentes/perfil/modificarperfil/modificarperfil.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { OlvidarContrasenaComponent } from './componentes/olvidarcontrasena/olvidarcontrasena.component';
import { RealizarCuestionarioComponent } from './componentes/cuestionariohabilidades/realizarCuestionario/realizarcuestionario.component';
import { EditarCuestionarioComponent } from './componentes/cuestionariohabilidades/editarcuestionario/editarcuestionario.component';
import { NuevoCuestionarioComponent } from './componentes/cuestionariohabilidades/nuevocuestionario/nuevocuestionario.component';
import { MenuCuestionarioComponent } from './componentes/cuestionariohabilidades/menucuestionario/menucuestionario.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { VerPerfilComponent } from './componentes/perfil/verperfil/verperfil.component';
import { MenuActividadesComponent } from './componentes/actividades/menuactividades/menuactividades.component';
import { EditarActividadesComponent } from './componentes/actividades/editaractividades/editaractividades.component';
import { NuevoActividadesComponent } from './componentes/actividades/nuevoactividades/nuevoactividades.component';
import { RelacionarActividadesComponent } from './componentes/actividades/relacionaractividades/relacionaractividades.component';

export const routes: Routes = [
  { path: 'actividades', component: ActividadesComponent, children: [
    { path: 'menu', component: MenuActividadesComponent },
    { path: 'editar', component: EditarActividadesComponent },
    { path: 'nuevo', component: NuevoActividadesComponent },
    { path: 'relacionar', component: RelacionarActividadesComponent },
    { path: '', redirectTo: '/actividades/menu', pathMatch: 'full' },
    { path: '**', redirectTo: '/actividades/menu' }
  ]},
  { path: 'examenes', component: ExamenesComponent, children: [
    { path: 'menu', component: MenuCuestionarioComponent },
    { path: 'editarcuestionario', component: EditarCuestionarioComponent },
    { path: 'nuevocuestionario', component: NuevoCuestionarioComponent },
    { path: 'realizarcuestionario', component: RealizarCuestionarioComponent },
    { path: '', redirectTo: '/examenes/menu', pathMatch: 'full' },
    { path: '**', redirectTo: '/examenes/menu' }
  ]},
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menuprincipal', component: MenuPrincipalComponent },
  { path: 'olvidarcontrasena', component: OlvidarContrasenaComponent },
  { path: 'perfil', component: PerfilComponent , children: [
    { path: 'ver', component: VerPerfilComponent },
    { path: 'modificarperfil', component: ModificarPerfilComponent },
    { path: '', redirectTo: '/perfil/ver', pathMatch: 'full' },
    { path: '**', redirectTo: '/perfil/ver' }
  ]},
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];
