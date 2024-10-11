export interface Player {
  jersey_number: number;
  out_minute?: number;
  player: {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    display_name: string | null;
    image_url: string | null;
    rating_score: number | null;
    birthdate: string | null;
    birthyear: number | null;
    age: number | null;
    foot: string | null;
    position: {
      id: number | null;
      key: string | null;
      name: string | null;
      abrv: string | null;
      base_name: string | null;
      base_abrv: string | null;
      rank: number | null;
      is_main: boolean | null;
    };
    positions: Array<{
      id: number | null;
      key: string | null;
      name: string | null;
      abrv: string | null;
      base_name: string | null;
      base_abrv: string | null;
      rank: number | null;
      is_main: boolean | null;
    }>;
  };
  position: {
    id: number | null;
    key: string | null;
    name: string | null;
    abrv: string | null;
    base_name: string | null;
    base_abrv: string | null;
    rank: number | null;
    is_main: boolean | null;
  };
  radar_chart: null;
}
