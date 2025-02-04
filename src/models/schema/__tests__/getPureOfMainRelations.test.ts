import { assertInstanceOf } from "https://deno.land/std@0.210.0/assert/assert_instance_of.ts";
import { schemaMockData } from "../../mainRelations/__test__/getMainRelations.test.ts";
import { getPureOfMainRelations } from "../mod.ts";

Deno.test({
  name: "getPureOfMainRelations should return pureSchemas and pureInrel",
  fn() {
    const getOnePureOfMainRelations = getPureOfMainRelations(
      schemaMockData,
      "city"
    );
    assertInstanceOf(getOnePureOfMainRelations, Object);
  },
});
