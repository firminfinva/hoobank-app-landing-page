import styles from "@/styles/style";

const Contact: React.FC = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex flex-col lg:flex-row gap-10 bg-white/5 backdrop-blur-md rounded-[20px] shadow-xl border border-white/10`}
  >
    {/* Formulaire de contact */}
    <div className="flex-1 w-full text-white">
      <h2 className={`${styles.heading2} text-3xl md:text-4xl mb-4`}>
        Contactez-nous
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mb-8`}>
        Nous sommes à votre disposition. Réponse garantie sous 48h.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Votre nom"
            required
            className="input-style"
          />
          <input
            type="email"
            placeholder="Votre email"
            required
            className="input-style"
          />
          <input type="tel" placeholder="Téléphone" className="input-style" />
          <input type="text" placeholder="Objet" className="input-style" />
        </div>
        <textarea
          placeholder="Votre message"
          rows={5}
          required
          className="input-style w-full resize-none"
        />
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>

    {/* Contact rapide */}
    <div className="w-full max-w-sm bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-2xl shadow-2xl text-white flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl font-bold mb-2">Contact Rapide</h3>
      <p className="text-lg mb-4">
        Appelez-nous directement pour toute assistance :
      </p>
      <div className="space-y-2">
        <p className="text-xl font-semibold underline hover:text-yellow-300 transition-colors">
          <a href="tel:+243994261583">+243 994 261 583</a>
        </p>
        <p className="text-xl font-semibold underline hover:text-yellow-300 transition-colors">
          <a href="tel:+243998054815">+243 998 054 815</a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
