import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | আচার ঘর`,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (related.length < 4) {
    const others = products
      .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, 4 - related.length);
    related.push(...others);
  }

  return <ProductDetailClient product={product} related={related} />;
}
