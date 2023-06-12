import Image from "next/image";

export default function Home() {
  return (
    <div>
      <body>
        <header>
          <img
            src="https://cdn.shopify.com/s/files/1/2693/0654/articles/pourquoi-kakashi-sharingan_b794263b-5363-4f24-a05b-70dc73ac884d.jpg?v=1575286554&width=1500"
            alt="sharingan kakashi"
          />
          <nav>
            <ul>
              <li className="italic text-red-500">
                <a href="#">accueil</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="bg-grey-500">
          <h1>Petit test </h1>
          <p>
            nzxzzdddzdazdd dadazdazdazd azdadazdazda dzdadazdazd azdazdzadaz
            dazdzadzadzad azdazdz
          </p>
        </main>
        <footer>
          <img
            src="https://logo-marque.com/wp-content/uploads/2021/08/Among-Us-Logo.png"
            alt="among us"
          />
        </footer>
      </body>
    </div>
  );
}
