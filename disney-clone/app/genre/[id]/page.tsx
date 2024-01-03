type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
function GenrePage({ params, searchParams }: Props) {
  return <div>{searchParams.genre}</div>;
}

export default GenrePage;
