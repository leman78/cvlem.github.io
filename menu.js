var menu1="<h2>Datos Personales</h2><ul><li><b>Dirección</b>: Mendoza 433 - 1882 Quilmes</li> <li><b>Número de teléfono</b>: 011 38630342 </li><li><b>Correo electrónico</b>: lemarts78@gmail.com </li><li><b>Fecha de nacimiento</b>: 06-05-1978</li></ul>";

var menu2= "<h2>Experiencia laboral</h2><h4>LEM  Laboratorio Multimedia (freelance), Buenos Aires</h4><ul> <li>Realizador de videos (Musicales • Redes sociales • Entrevistas)</li><li>Fotografía (Productos • Eventos)</li> <li> Fotolibros (Recuerdos de vacaciones • Casamientos • Cumpleaños)</li><li> Portdas para Spotify </li><li>Creación de logotipos para emprendedores</li><li>Redes sociales (Gestión de pautas publicitarias en Facebook Adds)</li><li>Sitios Web personalizados e instalación y gestión de WordPress</li><li> Iluminación y Sonido para eventos (Fiestas • Espectáculos • Eventos en general)</li><li> Diseño y estampados de productos sublimables (Remeras • Tazas • Mates • etc) </li></ul><h4>Técnico multimedia Editorial Santillana, Buenos Aires</h4><ul><li> Realización de libros digitales(Libromedia Santillana)</li><li> Realización de contenidos educativos digitales </li><li>Videos </li><li>Animaciones</li> <li>Edición de Audio resumen</li> <li>Mapas interactivos </li><li> Portadas de enlaces Web</li><li> Fotografía y videos de eventos externos</li>";

var menu3= "<h2>Estudios y certificaciones</h2><h4>Artes Multimediales</h4><p> UNA • Universidad Nacional de las Artes, Buenos Aires</p><h4>Producción y Realización Audiovisual</h4><p>UAI, Buenos Aires</p><h4>Diploma en Marketing y Comunicación</h4><p>CEFCO, Ginebra / Suiza</p>";

var menu4= "<h2>Conocimientos y habilidades</h2><ul><li>Fotografía Digital</li><li> Diseño y desarrollo de sitios Web</li><li>Marketing Digital</li><li> Filmación, edición y publicación de videos</li> <li>Diseño Gráfico</li><li> Audio y Sonido</li><li>Adobe Photoshop</li><li>Adobe Lightroom</li><li>Adobe Ilustrator</li><li>Adobe InDesign</li><li>Adobe Animate</li><li>Adobe Premiere</li><li>Adobe After Effects</li><li>Adobe Dreamweaver</li><li>Adobe Audition</li><li>Reaper</li><li>Cinema 4D</li><li>Ilustración</li>";

var menu5= "<h2>Objetivo laboral</h2><p>Emprendedor, responsable y comprometido a lograr objetivos. Amante de las artes y la tecnología. Siempre actualizándome para estar a la vanguardia de las tendencias y los avances en materia de multimedia. Espíritu autodidacta.</p>";


image_array = [

    '1.png',
    '2.png',
    '3.png',
    '4.png'
]

function get_random_image(){

random_index = Math.floor(Math.random() * image_array.length);

select_image = image_array[random_index]

document.getElementById('imgperfil').src=`./${select_image}`

}