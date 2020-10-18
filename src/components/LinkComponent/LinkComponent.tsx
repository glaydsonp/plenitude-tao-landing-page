import React from 'react';
import Link from 'next/link';

interface IProps {
  link: string;
  description: string;
}

const LinkComponent: React.FC<IProps> = ({ link, description }) => (
  <Link href={link}>
    <a target="_blank">{description}</a>
  </Link>
);

export default LinkComponent;
