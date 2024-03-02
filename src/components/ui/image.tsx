interface Props {
  url: string;
}
export const GuessImage = ({ url }: Props) => {
  return <img src={url} height="300px" width="300px" />;
};
