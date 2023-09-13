import { LeagueTable } from '@/components';
import { filterLeague } from '@/lib/fetcher';

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League');

  return (
    <div className="w-[600px]">
      {getEnglishLeague?.length ? (
        getEnglishLeague.map(data => (
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

export default English;
