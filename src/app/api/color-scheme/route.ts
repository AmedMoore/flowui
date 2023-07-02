import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { sessionOptions } from "@/services/session/session-options";
import { z } from "zod";

// noinspection JSUnusedGlobalSymbols
export async function POST(req: Request) {
  try {
    const body = BodySchema.safeParse(await req.json());

    if (!body.success) {
      return NextResponse.json(
        { error: body.error.errors[0].message },
        { status: StatusCodes.BAD_REQUEST },
      );
    }

    const { colorScheme } = body.data;

    const res = NextResponse.json(null);
    const session = await getIronSession(req, res, sessionOptions);
    session.colorScheme = colorScheme;
    await session.save();

    return NextResponse.json({ colorScheme }, res);
  } catch (e) {
    return NextResponse.json(
      { error: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR },
    );
  }
}

const BodySchema = z.object({
  colorScheme: z.literal("light").or(z.literal("dark")),
});
