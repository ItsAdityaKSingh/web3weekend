import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Jabber } from "../target/types/jabber";

describe("jabber", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Jabber as Program<Jabber>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
