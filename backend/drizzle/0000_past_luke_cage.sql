CREATE TABLE "system_health" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"service_name" varchar(128) NOT NULL,
	"version" varchar(32) NOT NULL,
	"is_healthy" boolean DEFAULT true NOT NULL,
	"notes" text,
	"last_checked_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "districts" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"hindi_name" varchar(128) NOT NULL,
	"slug" varchar(128) NOT NULL,
	"region" varchar(64) NOT NULL,
	"division" varchar(64) NOT NULL,
	"headquarters" varchar(128) NOT NULL,
	"area_sq_km" double precision NOT NULL,
	"population_approx" varchar(64) NOT NULL,
	"literacy_rate" varchar(32) NOT NULL,
	"sex_ratio" varchar(32) NOT NULL,
	"census_year" integer DEFAULT 2011 NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL,
	"svg_grid_x" integer NOT NULL,
	"svg_grid_y" integer NOT NULL,
	"hero_image" text NOT NULL,
	"identity_statement" text,
	"overview" text NOT NULL,
	"why_it_matters" text NOT NULL,
	"history" text NOT NULL,
	"geography" text NOT NULL,
	"culture" text NOT NULL,
	"economy" text NOT NULL,
	"languages" jsonb NOT NULL,
	"famous_for" jsonb NOT NULL,
	"important_places" jsonb NOT NULL,
	"food" jsonb NOT NULL,
	"festivals" jsonb NOT NULL,
	"arts_and_crafts" jsonb NOT NULL,
	"notable_people" jsonb NOT NULL,
	"agriculture" jsonb NOT NULL,
	"travel_tips" jsonb NOT NULL,
	"source_name" varchar(255) NOT NULL,
	"source_url" text,
	"verified_year" integer NOT NULL,
	"official_reference" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "districts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "places" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"category" varchar(64) NOT NULL,
	"place_type" varchar(32) DEFAULT 'place' NOT NULL,
	"district_id" varchar(64) NOT NULL,
	"region" varchar(64) NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL,
	"image" text NOT NULL,
	"summary" text NOT NULL,
	"history" text,
	"why_visit" text,
	"things_to_see" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"best_time_to_visit" varchar(128),
	"how_to_reach" text,
	"is_hidden_gem" boolean DEFAULT false NOT NULL,
	"is_featured" boolean DEFAULT false NOT NULL,
	"source" text,
	"metadata" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "places_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "heritage_sites" (
	"255" varchar(255) NOT NULL,
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"district_id" varchar(64) NOT NULL,
	"latitude" double precision NOT NULL,
	"longitude" double precision NOT NULL,
	"period" varchar(128) NOT NULL,
	"dynasty" varchar(128) NOT NULL,
	"category" varchar(128) NOT NULL,
	"is_unesco" boolean DEFAULT false NOT NULL,
	"unesco_ref" varchar(64),
	"unesco_year" integer,
	"image" text NOT NULL,
	"description" text NOT NULL,
	"architecture" text NOT NULL,
	"significance" text NOT NULL,
	"key_features" jsonb NOT NULL,
	"timings" varchar(128),
	"entry_fee" varchar(255),
	"best_time" varchar(128),
	"nearest_hub" varchar(255),
	"museum_doc" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "personalities" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"era" varchar(128),
	"era_period" varchar(64),
	"field" varchar(128),
	"category" varchar(128),
	"district_origin" varchar(64),
	"title" varchar(255) NOT NULL,
	"biography" text NOT NULL,
	"short_contribution" text,
	"featured_story_intro" text,
	"why_place_matters" text,
	"language_association" jsonb,
	"historical_connection" jsonb,
	"major_achievements" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"key_works" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"quotes" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"image" text NOT NULL,
	"sources" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "foods" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"region" varchar(64),
	"origin_district_id" varchar(64),
	"associated_districts" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"category" varchar(64) NOT NULL,
	"is_vegetarian" boolean DEFAULT true NOT NULL,
	"gi_tag" boolean DEFAULT false NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL,
	"ingredients" jsonb NOT NULL,
	"preparation_method" text NOT NULL,
	"cultural_context" text NOT NULL,
	"when_eaten" text,
	"season" varchar(64),
	"festival_connections" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"is_signature" boolean DEFAULT false NOT NULL,
	"sources" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "festivals" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"timing" varchar(255),
	"month_gregorian" varchar(64),
	"lunar_tithi" varchar(128),
	"category" varchar(64),
	"season" varchar(32),
	"tradition_category" varchar(64),
	"month_index" integer,
	"atmosphere_quote" text,
	"regions" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"associated_districts" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"prominence" varchar(128),
	"description" text NOT NULL,
	"rituals" jsonb NOT NULL,
	"ritual_sequence" jsonb,
	"special_foods" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"food_traditions" jsonb,
	"music_tradition" jsonb,
	"sacred_places" jsonb,
	"origins_history" text,
	"cultural_significance" text,
	"image" text NOT NULL,
	"sources" jsonb,
	"multilingual" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "arts_crafts" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"tagline" varchar(255),
	"origin_region" varchar(64) NOT NULL,
	"district_id" varchar(64) NOT NULL,
	"associated_districts" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"category" varchar(64) NOT NULL,
	"category_type" varchar(32),
	"gi_tag" boolean DEFAULT false NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL,
	"history" text NOT NULL,
	"techniques" text NOT NULL,
	"materials" jsonb NOT NULL,
	"master_artisans" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"practitioners_list" jsonb,
	"motifs" jsonb,
	"process_steps" jsonb,
	"cultural_meaning" text,
	"living_today" text,
	"sources" jsonb,
	"multilingual" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bihar_languages" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"local_name" varchar(128) NOT NULL,
	"category" varchar(64) NOT NULL,
	"classification" text NOT NULL,
	"scholarly_classification_note" text NOT NULL,
	"official_status" text NOT NULL,
	"primary_regions" jsonb NOT NULL,
	"associated_districts" jsonb NOT NULL,
	"traditional_scripts" jsonb NOT NULL,
	"primary_script" varchar(128) NOT NULL,
	"overview" text NOT NULL,
	"literary_tradition" text NOT NULL,
	"oral_traditions" jsonb NOT NULL,
	"notable_figures" jsonb NOT NULL,
	"festival_connections" jsonb,
	"music_track_ids" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"sample_phrase" jsonb NOT NULL,
	"sample_literary_passage" jsonb,
	"census_note" text NOT NULL,
	"sources" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "interface_languages" (
	"id" varchar(16) PRIMARY KEY NOT NULL,
	"code" varchar(16) NOT NULL,
	"name" varchar(128) NOT NULL,
	"native_name" varchar(128) NOT NULL,
	"script" varchar(64) NOT NULL,
	"is_scheduled_language" boolean DEFAULT false NOT NULL,
	"translation_available" boolean DEFAULT false NOT NULL,
	"fallback_language" varchar(16) DEFAULT 'en' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "interface_languages_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "scripts" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"hindi_name" varchar(128) NOT NULL,
	"native_sample" text NOT NULL,
	"native_sample_translation" text NOT NULL,
	"languages_associated" jsonb NOT NULL,
	"historical_era" text NOT NULL,
	"status_today" text NOT NULL,
	"description" text NOT NULL,
	"cultural_note" text NOT NULL,
	"unicode_range" varchar(128),
	"visual_glyphs" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "music_tracks" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"performer" varchar(255) NOT NULL,
	"tradition" varchar(255) NOT NULL,
	"tradition_type" varchar(64) NOT NULL,
	"category" varchar(64) NOT NULL,
	"language" varchar(64) NOT NULL,
	"region" varchar(64) NOT NULL,
	"district_id" varchar(64),
	"youtube_id" varchar(64) NOT NULL,
	"youtube_url" text NOT NULL,
	"duration_minutes" varchar(32) NOT NULL,
	"cultural_context" text NOT NULL,
	"description" text NOT NULL,
	"instruments" jsonb NOT NULL,
	"source" text NOT NULL,
	"cover_image" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "history_eras" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"period" varchar(128) NOT NULL,
	"start_year_order" integer NOT NULL,
	"date_label" varchar(128) NOT NULL,
	"summary" text NOT NULL,
	"hindi_summary" text NOT NULL,
	"historical_geography" text NOT NULL,
	"key_themes" jsonb NOT NULL,
	"surviving_landmarks" jsonb NOT NULL,
	"related_regions" jsonb NOT NULL,
	"sources" jsonb NOT NULL,
	"cover_image" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "history_events" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"era_id" varchar(64) NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"date_label" varchar(128) NOT NULL,
	"approximate_year" varchar(64),
	"location" varchar(255) NOT NULL,
	"historical_region" varchar(128) NOT NULL,
	"district_id" varchar(64),
	"key_actors" jsonb NOT NULL,
	"description" text NOT NULL,
	"evidence_type" varchar(128) NOT NULL,
	"surviving_evidence" text NOT NULL,
	"what_remains_today" text NOT NULL,
	"sources" jsonb NOT NULL,
	"image" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "journey_stops" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"journey_id" varchar(64) NOT NULL,
	"stop_number" integer NOT NULL,
	"day_number" integer NOT NULL,
	"place_name" varchar(255) NOT NULL,
	"hindi_place_name" varchar(255),
	"district_id" varchar(64) NOT NULL,
	"district_name" varchar(128) NOT NULL,
	"region" varchar(64) NOT NULL,
	"headline" varchar(255) NOT NULL,
	"narrative" text NOT NULL,
	"what_to_experience" jsonb NOT NULL,
	"culinary_highlight" jsonb,
	"music_recommendation" jsonb,
	"language_spoken" varchar(128) NOT NULL,
	"practical_tips" text NOT NULL,
	"travel_transit" text NOT NULL,
	"image" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "journeys" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255) NOT NULL,
	"tagline" text NOT NULL,
	"hindi_tagline" text NOT NULL,
	"theme" varchar(64) NOT NULL,
	"theme_label" varchar(128) NOT NULL,
	"theme_color" varchar(32) NOT NULL,
	"duration_days" integer NOT NULL,
	"total_stops" integer NOT NULL,
	"districts" jsonb NOT NULL,
	"district_names" jsonb NOT NULL,
	"regions" jsonb NOT NULL,
	"best_season" varchar(128) NOT NULL,
	"pace" varchar(32) NOT NULL,
	"hero_image" text NOT NULL,
	"story_narrative" text NOT NULL,
	"why_this_route" text NOT NULL,
	"culinary_traditions" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"craft_traditions" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"connected_eras" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"travel_advisories" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"sources" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "translations" (
	"id" varchar(160) PRIMARY KEY NOT NULL,
	"language_code" varchar(16) NOT NULL,
	"section" varchar(64) NOT NULL,
	"translation_key" varchar(128) NOT NULL,
	"translation_value" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "media_assets" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255),
	"location" varchar(255),
	"district_id" varchar(64),
	"src" text NOT NULL,
	"caption" text,
	"category" varchar(64),
	"license" varchar(128) DEFAULT 'Verified Public Educational / Atlas License',
	"is_verified" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "discovery_connections" (
	"id" varchar(160) PRIMARY KEY NOT NULL,
	"source_id" varchar(64) NOT NULL,
	"target_id" varchar(64) NOT NULL,
	"target_type" varchar(32) NOT NULL,
	"relationship" varchar(64) NOT NULL,
	"label" varchar(128) NOT NULL,
	"hindi_label" varchar(128),
	"district_id" varchar(64),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "discovery_entities" (
	"id" varchar(64) PRIMARY KEY NOT NULL,
	"type" varchar(32) NOT NULL,
	"type_label" varchar(64) NOT NULL,
	"hindi_type_label" varchar(64) NOT NULL,
	"title" varchar(255) NOT NULL,
	"hindi_name" varchar(255),
	"subtitle" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"district_id" varchar(64),
	"aliases" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"typed_aliases" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"keywords" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"search_weight" integer DEFAULT 10 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "places" ADD CONSTRAINT "places_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "heritage_sites" ADD CONSTRAINT "heritage_sites_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personalities" ADD CONSTRAINT "personalities_district_origin_districts_id_fk" FOREIGN KEY ("district_origin") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "foods" ADD CONSTRAINT "foods_origin_district_id_districts_id_fk" FOREIGN KEY ("origin_district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "arts_crafts" ADD CONSTRAINT "arts_crafts_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "music_tracks" ADD CONSTRAINT "music_tracks_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "history_events" ADD CONSTRAINT "history_events_era_id_history_eras_id_fk" FOREIGN KEY ("era_id") REFERENCES "public"."history_eras"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "history_events" ADD CONSTRAINT "history_events_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "journey_stops" ADD CONSTRAINT "journey_stops_journey_id_journeys_id_fk" FOREIGN KEY ("journey_id") REFERENCES "public"."journeys"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "journey_stops" ADD CONSTRAINT "journey_stops_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "discovery_connections" ADD CONSTRAINT "discovery_connections_source_id_discovery_entities_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."discovery_entities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "discovery_connections" ADD CONSTRAINT "discovery_connections_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "discovery_entities" ADD CONSTRAINT "discovery_entities_district_id_districts_id_fk" FOREIGN KEY ("district_id") REFERENCES "public"."districts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_translations_lang_sec" ON "translations" USING btree ("language_code","section");