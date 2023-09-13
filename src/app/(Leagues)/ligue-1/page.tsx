import { LeagueTable } from '@/components';
import { filterLeague } from '@/lib/fetcher';

const Ligue1 = async () => {
  const getLigue1 = await filterLeague('Ligue 1');
  return (
    <div className="w-[600px]">
      {getLigue1?.length ? (
        getLigue1.map(data => (
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

export default Ligue1;
