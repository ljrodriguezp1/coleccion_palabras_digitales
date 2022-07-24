import { useState } from "react";

const initialState = {
	letters: [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	],
	def: [
		{ word: 'avatar', definition: 'Representación gráfica que, en el ámbito de internet y las nuevas tecnologías de la comunicación, se asocia a un usuario para su identificación en el mundo virtual. Los avatares pueden ser fotografías, dibujos o, incluso, representaciones tridimensionales. Como tal, se pueden ver avatares en videojuegos, juegos de rol, foros de discusión, mensajería instantánea y plataformas de interacción como Twitter.' },
		{ word: 'blog', definition: 'Un blog es un sitio web que permite la creación y difusión de contenido, en  la mayoría de los casos, sobre un tema específico y en el que se comparten conocimientos y opiniones de forma regular.' },
		{ word: 'blogger', definition: 'Un blogger o bloguero es una persona que tiene un blog y crea contenido de forma regular, bien sea sobre un tema de interés público o privado, y cuyo fin puede ser comercial o personal.' },
		{ word: 'buffer', definition: 'Memoria de almacenamiento temporal de información que permite transferir los datos entre unidades funcionales con características de transferencia diferentes.' },
		{ word: 'captcha', definition: 'Test utilizado por sitios y servicios web para comprobar si el usuario es un internauta humano y no un robot; consiste en identificaciones sencillas de letras, cifras o imágenes.' },
		{ word: 'cookie', definition: 'Las cookies son un pequeño archivo con datos que se guarda en el ordenador del usuario cuando visita una página. Este fichero almacena cierta información sobre el usuario, por ejemplo su comportamiento navegando por internet o las credenciales de usuario.' },
		{ word: 'content management system (cms)', definition: 'Un CMS (Content Management System) o Sistema de Gestión de Contenidos es un sistema online que permite poner en marcha una página web de forma sencilla y rápida. Se trata de un software que te ayuda a administrar contenidos dinámicos, por ejemplo, un blog, un ecommerce o cualquier tipo de página web.' },
		{ word: 'cloud', definition: 'Cloud significa, literalmente, nube. En términos informáticos nos referimos a un paradigma que permite ofrecer servicios de computación a través de una red, que normalmente es Internet.' },
		{ word: 'emoji', definition: 'Un emoji es una imagen o pictograma que se utiliza para expresar una idea, emoción o sentimiento en medios de comunicación digital, mensajes  electrónicos y sitios web. Podemos encontrarlos en distintas aplicaciones de mensajería instantánea, como WhatsApp, Spotbros, Telegram o Hangouts.' },
		{ word: 'fan page', definition: 'La Fanpage es una página creada especialmente para ser un canal de comunicación con fans dentro de Facebook (fan page = página para fans, en traducción literal). A diferencia de los perfiles, las fanpages son espacios que reúnen a personas interesadas en un asunto, empresa, causa o personaje en común.' },
		{ word: 'followers', definition: 'Follower es un término empleado en las redes sociales para describir a una persona que está siguiendo la cuenta de otra. Es decir, que verá en su timeline (línea de tiempo) todos los mensajes que publique o los usuarios a los que sigue.' },
		{ word: 'gamificación', definition: 'La Gamificación es una técnica de aprendizaje que traslada la mecánica de los juegos al ámbito educativo-profesional con el fin de conseguir mejores resultados, ya sea para absorber mejor algunos conocimientos, mejorar alguna habilidad, o bien recompensar acciones concretas, entre otros muchos objetivos.' },
		{ word: 'google docs', definition: 'Documentos de Google es un procesador de texto en línea que se incluye como parte de la suite Google Docs Editors basada en la web de Google, que también incluye Hojas de Cálculo de Google, Presentaciones de Google, Dibujos de Google, Formularios de Google, Google Sites y Google Keep.' },
		{ word: 'google classroom', definition: 'Google Classroom es la herramienta que une la enseñanza y el aprendizaje en un solo lugar. Una herramienta segura y fácil de usar que ayuda a los educadores a administrar, medir y enriquecer las experiencias de aprendizaje.' },
		{ word: 'google jamboard', definition: 'Consiste en una pizarra blanca con pantalla táctil de 55 pulgadas y resolución 4K, destinado a complementar a los tipos de herramientas basadas en la nube o G Suite que incluye, como por ejemplo, Gmail, Drive, Docs, entre otros; las herramientas que posee Jamboard están pensadas para la colaboración y el trabajo a distancia de forma en línea.' },
		{ word: 'hamburger menú', definition: 'El botón de hamburguesa, llamado así por su parecido involuntario con una hamburguesa, es un botón que normalmente se coloca en la esquina superior de una interfaz gráfica de usuario. Su función es alternar un menú o barra de navegación entre colapsarse detrás del botón o mostrarse en la pantalla.' },
		{ word: 'hashtag', definition: 'Hashtag es un término asociado a asuntos o discusiones que desean ser indexadas en redes sociales, insertando el símbolo de numeral (#) antes de la palabra, frase o expresión. Cuando la combinación es publicada, se transforma en un hyperlink que lleva a una página con otras publicaciones relacionadas al mismo tema.' },
		{ word: 'inteligencia artificial (ai)', definition: 'La Inteligencia Artificial (IA) es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano.' },
		{ word: 'intranet', definition: 'Una intranet es una red informática que utiliza la tecnología del protocolo de Internet para compartir información, sistemas operativos o servicios de computación dentro de una organización. Suele ser interna, en vez de pública como internet, por lo que solo los miembros de esa organización tienen acceso a ella.' },
		{ word: 'landing page', definition: 'En la mercadotecnia en internet, se denomina página de aterrizaje a una página web a la que una persona llega tras pulsar en el enlace o botón en una guía, un portal o algún banner o anuncio de texto situado en otra página web, aplicación, red social, correo electrónico o portal de internet.' },
		{ word: 'learning management system (lms)', definition: 'Un sistema de gestión de aprendizaje es un software instalado en un servidor web que se emplea para administrar, distribuir y controlar las actividades de formación no presencial de una institución u organización.' },
		{ word: 'meet', definition: 'Google Meet, antes conocida como Hangout Meet, es la solución de videoconferencias por excelencia de Google, incluida en los distintos paquetes de G Suite que permite realizar llamadas y videoconferencias desde cualquier lugar y tipo de dispositivo con conexión a internet.' },
		{ word: 'mooc', definition: 'Los cursos en línea masivos y abiertos o MOOC son una modalidad de aprendizaje en línea que está teniendo auge a nivel mundial dirigidos a un número ilimitado de participantes a través de Internet según el principio de educación abierta y masiva.​' },
		{ word: 'moodle', definition: 'Moodle es una herramienta de gestión de aprendizajes, o más concretamente de Learning Content Management, de distribución libre, escrita en PHP.​' },
		{ word: 'metacognición', definition: 'La metacognición es una conciencia de los propios procesos de pensamiento y una comprensión de los patrones detrás de ellos. El término proviene de la palabra raíz meta, que significa más allá o encima de.' },
		{ word: 'metaverso', definition: 'Los metaversos son entornos donde los humanos interactúan social y económicamente como avatares, a través de un soporte lógico en un ciberespacio, el que actúa como una metáfora del mundo real, pero sin sus limitaciones.' },
		{ word: 'multiverso', definition: 'Multiverso es un término usado para definir el conjunto de los muchos universos existentes, según las hipótesis que afirman que existen universos diferentes del nuestro propio.' },
		{ word: 'online', definition: 'El término en línea hace referencia al estado activo de conectividad en internet. Se opone al término fuera de línea, que indica un estado de desconexión. El concepto se utiliza en el ámbito de la informática para nombrar a algo que está conectado o a alguien que está haciendo uso de una red.' },
		{ word: 'open source', definition: 'El software de código abierto es el software cuyo código fuente y otros derechos que normalmente son exclusivos para quienes poseen los derechos de autor, son publicados bajo una licencia de código abierto o forman parte del dominio público.' },
		{ word: 'post', definition: 'Un post es un artículo que se publica en el blog de una web o en redes sociales y generalmente es mostrado cronológicamente junto al resto de artículos.' },
		{ word: 'qr', definition: 'Un código QR es la evolución del código de barras. Es un módulo para almacenar información en una matriz de puntos o en un código de barras bidimensional.' },
		{ word: 'quick time player', definition: 'QuickTime es un framework multimedia estándar desarrollado por Apple que consiste en un conjunto de bibliotecas y un reproductor multimedia. En su versión 7 es compatible con el estándar MPEG-4.' },
		{ word: 'reader', definition: 'El estándar mundial gratuito para visualizar, imprimir, firmar y comentar de forma fiable documentos PDF.' },
		{ word: 'realidad aumentada', definition: 'La realidad aumentada es el término que se usa para describir al conjunto de tecnologías que permiten que un usuario visualice parte del mundo real a través de un dispositivo tecnológico con información gráfica añadida por este.' },
		{ word: 'realidad virtual', definition: 'La realidad virtual es un entorno de escenas y objetos simulados de apariencia real. La acepción más común refiere a un entorno generado mediante tecnología informática, que crea en el usuario la sensación de estar inmerso en él.' },
		{ word: 'sm (social media)', definition: 'Social media (redes sociales) es un término amplio que abarca las redes sociales. Por lo tanto, social media se refiere a todas las redes y medios que han surgido en los últimos años con el Internet. ' },
		{ word: 'spam', definition: 'El término Correo basura también llamado correo no deseado o correo no solicitado hace referencia a los mensajes de correo electrónico no solicitados, no deseados o con remitente no conocido' },
		{ word: 'sticker', definition: 'Son imágenes que puedes añadir a tus mensajes de texto y que te ofrecen muchas más opciones que los emoticonos tradicionales. ' },
		{ word: 'streaming', definition: 'El streaming es la distribución digital de contenido multimedia a través de una red de computadoras, de manera que el usuario utiliza el producto a la vez que se descarga. La palabra se refiere a una corriente continua que fluye sin interrupción, y habitualmente a la difusión de audio o vídeo. ' },
		{ word: 'tac', definition: 'Las Tecnologías del Aprendizaje y el Conocimiento que son las que incluyen a las TIC más un componente metodológico necesario para que se genere un aprendizaje significativo,1 es decir, las tecnologías están enfocadas al servicio del aprendizaje y la adquisición de conocimientos.' },
		{ word: 'tools', definition: 'PDF-Tools es una aplicación popular y de prueba solo disponible para Windows, que forma parte de la categoría Productividad y Negocios de la subcategoría Documentos PDF' },
		{ word: 'teams', definition: 'Microsoft Teams es una plataforma basada en la nube cuyo principal objetivo es la colaboración en equipo. Teams pertenece a la suite de productos de Microsoft. Su principal función es ser una herramienta de mensajería empresarial que permite la comunicación y la colaboración en tiempo real entre usuarios dentro y fuera de la organización.' },
		{ word: 'web site', definition: 'Un sitio web, portal o cibersitio es una colección de páginas web relacionadas y comunes a un dominio de internet o subdominio en la World Wide Web dentro de Internet.' },
		{ word: 'webinar', definition: 'Una conferencia web o conferencia en línea es un término usado para referirse a varios tipos de servicios de colaboración en línea entre participantes. Es una manera de compartir información, impartir una charla o desarrollar un curso en tiempo real con la misma calidad que si se llevara a cabo en un aula.' },
		{ word: 'wiki', definition: 'Sistema de trabajo informático utilizado en los sitios web que permite a los usuarios modificar o crear su contenido de forma rápida y sencilla.' },
		{ word: 'zoom', definition: 'Zoom es un programa de software de videochat desarrollado por Zoom Video Communications. El plan gratuito ofrece un servicio de video chat que permite hasta 100 participantes al mismo tiempo, con una restricción de tiempo de 40 minutos.' }
	]
}

const useInitialState = () => {
	const [alphabet, setAlphabet] = useState(initialState);

	return {
		alphabet
	}
}

export default useInitialState;
