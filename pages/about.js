import Link from 'next/link';
import Image from '../components/Image';
const About = () => {
  return (
    <div style={{ fontSize: '20px', color: 'blue' }}>
      <h1>About page</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>
        <Image />
      </div>

    </div>
  );
}

export default About;