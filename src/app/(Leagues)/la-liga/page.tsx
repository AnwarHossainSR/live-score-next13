import { LeagueTable } from '@/components';
import { filterLeague } from '@/lib/fetcher';

const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division');

  return (
    <div className="w-[600px]">
      {getLaLiga?.length ? (
        getLaLiga.map(data => (
          <div key={data.id}>
            <LeagueTable data={data} />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center w-full">
          <p className="text-2xl font-bold text-gray-500">No data available</p>
        </div>
      )}
    </div>
  );
};

export default LaLiga;
