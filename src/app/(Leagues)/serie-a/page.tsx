import { LeagueTable } from '@/components';
import { filterLeague } from '@/lib/fetcher';

const SerieA = async () => {
  const getSerieA = await filterLeague('Serie A');
  return (
    <div className="w-[600px]">
      {getSerieA?.length ? (
        getSerieA.map(data => (
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

export default SerieA;
