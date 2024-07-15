import { product } from './product';

const Image = () => <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />;

export default Image;
