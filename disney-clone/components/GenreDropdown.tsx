import { Genres } from "@/typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const url = "https://api.themoviedb.org/3/genre/movie/list";

async function GenreDropdown() {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const res = await fetch(url, options);
  const data = (await res.json()) as Genres;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1">
        Genres <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.genres.map((genre) => {
          return (
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;
