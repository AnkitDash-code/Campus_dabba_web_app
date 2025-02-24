import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';

export async function GET(request: Request, { params }: { params?: { id?: string } }) {
  const supabase = createClient();

  // If no ID is provided, return all cooks
  if (!params?.id) {
    const { data: cooks, error } = await supabase
      .from('cooks')
      .select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ cooks });
  }

  // If ID is provided, return specific cook and their menu items
  const { data: cook, error: cookError } = await supabase
    .from('cooks')
    .select('*')
    .eq('id', params.id)
    .single();

  if (cookError) {
    return NextResponse.json({ error: cookError.message }, { status: 500 });
  }

  const { data: menuItems, error: menuError } = await supabase
    .from('dabba_menu')
    .select('*')
    .eq('cook_id', params.id);

  if (menuError) {
    return NextResponse.json({ error: menuError.message }, { status: 500 });
  }

  return NextResponse.json({ cook, menuItems });
}