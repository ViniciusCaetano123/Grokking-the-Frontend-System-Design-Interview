export default async function PostagensDataPage({
  params,
}: {
  params: { data: string } | Promise<{ data: string }>;
}) {
  const { data } = await Promise.resolve(params);
  return (
    <div>
      <h1>Postagens {data}</h1>
    </div>
  );
}
