import styles from "@/styles/style";

const Contact: React.FC = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contactez-nous</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nous sommes là pour répondre à toutes vos questions,reponse dans les
        prochaiens 48h max
      </p>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full p-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Votre téléphone"
          className="w-full p-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Objet"
          className="w-full p-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Votre message"
          rows={4}
          className="w-full p-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out"
        >
          Envoyer
        </button>
      </form>
    </div>

    {/* Right-side box for quick contact */}
    <div className="sm:ml-10 ml-0 sm:mt-0 mt-10 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white shadow-lg max-w-[300px] flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold mb-4">Contact Rapide</h3>
      <p className="text-lg">
        Appelez-nous directement pour toute assistance :
      </p>
      <a
        href="tel:+33123456789"
        className="text-2xl font-semibold mt-4 underline hover:text-yellow-300"
      >
        <p>+243 994 261 583</p>
        <p>+243 998 054 815</p>
      </a>
    </div>
  </section>
);

export default Contact;
