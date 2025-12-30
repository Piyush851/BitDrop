import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();

        const client = await clientPromise;
        const db = client.db("bitdrop");
        const collection = db.collection("urls");

        const existing = await collection.findOne({
            shorturl: body.shorturl,
        });

        if (existing) {
            return Response.json(
                {
                    success: false,
                    error: true,
                    message: "Short URL already exists",
                },
                { status: 409 } // Conflict
            );
        }

        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            createdAt: new Date(),
        });

        return Response.json({
            success: true,
            error: false,
            message: "URL generated successfully",
        });
    } catch (error) {
        console.error("Generate API Error:", error);

        return Response.json(
            {
                success: false,
                error: true,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}
