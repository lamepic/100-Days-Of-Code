import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  const movies = await getSearchMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Result for &quot;{termToUse}&quot;
        </h1>
        <MovieCarousel movies={movies} title="Movies" isVertical />
        <MovieCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  );
}

export default SearchPage;
