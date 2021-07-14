import { VFC } from 'react';
type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = ({ color, fontSize }: Props) => {
  return <p style={{ color, fontSize }}>テキスト</p>;
};
