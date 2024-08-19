import Image from "next/image";
import Link from "next/link"
export default async function ProductDetailPage({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div>
        <Link href="/products">
            <button>Back</button>
        </Link>
      <h2>{product.title}</h2>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
