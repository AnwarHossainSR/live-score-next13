import { LeagueTable } from '@/components';
import { filterLeague } from '@/lib/fetcher';

const Brasileiro = async () => {
  const getBrasileiro = await filterLeague('Campeonato Brasileiro Série A');
  return (
    <div className="w-[600px]">
      {getBrasileiro?.length ? (
        getBrasileiro.map(data => (
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

export default Brasileiro;
