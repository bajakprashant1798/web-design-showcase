import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { record } = await req.json();

    if (!record) {
      return new Response(JSON.stringify({ error: "No record provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Log the new lead notification (in production, integrate with an email service)
    console.log(`🔔 New lead received!`);
    console.log(`Name: ${record.name}`);
    console.log(`Email: ${record.email}`);
    console.log(`Service: ${record.service}`);
    console.log(`Company: ${record.company || "N/A"}`);
    console.log(`Message: ${record.message}`);

    // You can integrate with email services like Resend, SendGrid, etc.
    // For now, we'll use the Lovable AI gateway to generate a summary
    const ADMIN_NOTIFICATION_EMAIL = "admin@digitalfx.com";

    return new Response(
      JSON.stringify({
        success: true,
        message: `Notification processed for lead: ${record.name}`,
        lead: {
          name: record.name,
          email: record.email,
          service: record.service,
        },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
