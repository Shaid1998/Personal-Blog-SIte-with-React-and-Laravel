<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string('motivation_title')->nullable();
            $table->text('motivation')->nullable();
            $table->string('goal_title')->nullable();
            $table->text('goal')->nullable();
            $table->string('sender_name')->nullable();
            $table->string('sender_emgil')->nullable();
            $table->text('sender_message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abouts');
    }
};
