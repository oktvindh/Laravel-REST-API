<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul' => 'required|max:255',
            'ringkasan' => 'required|min:5',
            'tahun' => 'required',
            'poster' => 'mimes:png,jpg,jpeg',
            'genre_id' => 'required'
        ];
    }

    public function messages(): array
    {

        return [
            'judul.required' => 'judul harus diisi',
            'ringkasan.required' => 'ringkasan harus diisi, minimal 5 karakter',
            'tahun.required' => 'tahun harus diisi',
            'poster.mimes' => 'poster harus berformat png, jpg, atau jpeg',
            'genre_id.required' => 'genre_id harus diisi',

        ];
    }
}
