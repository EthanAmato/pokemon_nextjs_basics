import styles from "@/app/page.module.css";
import Image from "next/image";
// By default in the app router, Next.js is creating things called
// 'server components' -> these are react components that are put together
// into comprehensive HTML on the server and then, when as much of the HTML
// is condensed as possible, the HTML is then shipped to the user to view.

// This is the exact same idea as thymleaf - the only difference being we
// are using React components to 'prerender' our UI instead of thymeleaf

// This means, we can do something like this:

export default async function Pokemon({ params }) {
  // We are able to access slugs (stand-in value) inside of a url
    // via this 'params' prop that we can pass in to a nested route:
  console.log(params);

  const res = await fetch(`http://localhost:3000/api/${params.slug}`);
  const pokemon = await res.json();
  console.log(pokemon);

  return (
    <main className={styles.posts}>
      <div>Pokemon:</div>

      <h1>{params.slug}</h1>
      {/* In Next.Js we have access to an object called the Image
      which lets NextJs optimize the rendering and loading of any image
      you want to show to users: */}
      <img
        src={pokemon.data.sprites.front_default}
        height={200}
        width={200}
        alt={`${params.slug}`}
      />

      <p>Height: {pokemon.data.height}</p>
      <p>Weight: {pokemon.data.weight}</p>
    </main>
  );
}
