import { Injectable } from "@angular/core";
import { createClient } from "@supabase/supabase-js";
import { from, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

const SUPABASE_URL = environment.SUPABASE_URL;
// WARNING: don't do that at home, this is a private key
const SUPABASE_KEY = environment.SUPABASE_KEY;

@Injectable({
  providedIn: "root"
})
export class SupabaseService {
  private supabase;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  get(resource, select = "*", where = null, limit = null): Observable<any> {
    const query = this.supabase.from(resource).select(select);

    if (where !== null) {
      where(query);
    }

    if (limit !== null) {
      query.limit(limit);
    }
    
    return from(query).pipe(
      map(res => res['body'])
    );
  }
}
