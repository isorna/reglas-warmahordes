import React from 'react';
import styles from './DisclaimerContent.module.css';

export default function DisclaimerContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
					<p><strong>Reglas Warmahordes</strong> es un sitio web creado por la comunidad española de Warmachine &amp; Hordes, con la intención de facilitar el acceso a las reglas a todos los jugadores hispanohablantes.</p>
					<p>Todos los derechos sobre el juego Warmachine &amp; Hordes, sus imágenes y reglas son propiedad de <a href='https://home.privateerpress.com/trademarks-and-copyrights/' target='_blank'>Privateer Press, Inc.</a></p>
				</div>
        <div className="row">
					<h1>Disclaimer</h1>
      		<p>Content and Images originating from the Privateer Press website are © 2001—2019 Privateer Press, Inc. All Rights Reserved. WARMACHINE ®, HORDES, and their logos are trademarks of <a href='https://home.privateerpress.com/trademarks-and-copyrights/' target='_blank'>Privateer Press, Inc.</a> Images and trademarks used without permission. This website is unofficial and is not endorsed by Privateer Press.</p>
        </div>
      </div>
    </section>
  );
}
