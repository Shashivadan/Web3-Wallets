import { generatemnemonic } from "@/actions/mnemonic";
import ShowSeeds from "@/components/ShowSeeds";
import Title from "@/components/Title";

export default async function Home() {
  const memo = await generatemnemonic();
  console.log(memo);

  return (
    <main className=" bg-black text-white min-h-screen h-full flex flex-col">
      <div className=" p-28">
        <Title />
      </div>
      <div className=" flex items-center justify-center">
        <ShowSeeds seeds={memo.arryaOfSting} />
      </div>
    </main>
  );
}
