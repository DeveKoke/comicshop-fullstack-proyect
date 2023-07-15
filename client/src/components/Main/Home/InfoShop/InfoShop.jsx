const InfoShop = () => {
  return (
  <>
    <article>
      <h2>LOS MÁS SOLICITADOS</h2>
      <div className="solicitadosWrapper">
        <div className="solicitadosCard">
          <h3>NARUTO</h3>
          <img src="/assets/Naruto.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>BATMAN</h3>
          <img src="/assets/Batman1.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>SPIDERMAN</h3>
          <img src="/assets/Spidey.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>DRAGON BALL</h3>
          <img src="/assets/Dragon.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>SUPERMAN</h3>
          <img src="/assets/Superman1.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3 className="MyF">MORTADELO Y FILEMON</h3>
          <img src="/assets/MyF.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>ONE PIECE</h3>
          <img src="/assets/One_piece.jpg" alt="" />
        </div>
        <div className="solicitadosCard">
          <h3>WALKING DEAD</h3>
          <img src="/assets/WKD.jpg" alt="" />
        </div>
      </div>
    </article>
    <article className="infoShopBox">
      <div className="horarioBox">
          <h2>NUESTRO HORARIO</h2>
          <div>
            <h3>LUNES A JUEVES</h3>
            <p>De 11:00 a 13:30 y de 17:00 a 19:30 hrs.</p>
          </div>
          <div>
            <h3>VIERNES Y SÁBADOS</h3>
            <p>De 11:00 a 14:00 y de 17:00 a 20:00 hrs.(Cerrado domingos y festivos)</p>
          </div>
          <div>
            <h3>Horario Navideño:</h3>
            <p>25 y 31 de Diciembre, 1 y 6 de Enero cerrado.24 de Diciembre cerrado por la tarde.</p>
          </div>
          <div>
            <h3>Horario de verano:</h3>
            <p>(Durante todo Agosto) Lunes a Sábado 11:00 a 14:00 horas (Cerrado por las tardes)</p>
          </div>
          <div>
            <h3>¿Tienes alguna consulta sobre un pedido?</h3>
            <p>Escríbenos a: nosotros@CCM.com</p>
          </div>
          <div>
            <h3>¿Eres una editorial y quieres proponernos una presentación o sesión de firmas?</h3>
            <p>Escríbenos a: eventos@CCM.com</p>
          </div>
      </div>
      <div className="DondeEstamos">
        <h2>¿Dónde estamos?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2517.379841635478!2d-3.7053867694284635!3d40.42590117061806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1689420383532!5m2!1sen!2ses" 
        width="600" height="370" className="map"
        style={{ border: 0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </article>

  </>
  
  );
};

export default InfoShop;
