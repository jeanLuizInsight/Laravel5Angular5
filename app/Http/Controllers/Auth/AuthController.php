<?php

namespace App\Http\Controllers\Auth;

use Auth;
use JWTAuth;
use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;
use App\Models\Usuario;
use App\Models\Empresa;
use App\Models\Jogo;
use App\Enums\TipoPermissaoType;
use App\Services\EmailService;
use App\Http\Controllers\JogadorController;

use Log;

/**
 * Classe de representação das regras relacionadas a autenticação do Usuário.
 * @author Jean Luiz Zanata <jl.zanata92@gmail.com>
 */
class AuthController extends Controller {

    /**
     * Cria uma nova instancia para AuthController ja fazendo a injecao de suas dependencias
     * @return void
     */
    public function __construct() {

    }

    /**
     * Responsável por realizar login e autenticar usuário gerando token
     *
     * @param Request $request
     * @return json
     */
    public function login(Request $request) {
        
    }

    /**
     * Responsável por realizar o cadastro da senha do usuário para primeiro acesso
     *
     * @param Request $request
     * @return json
     */
    public function register(Request $request) {
       
    }

    /**
     * Responsável por atualizar a senha do usuário.
     *
     * @param Request $request
     * @return json
     */
    public function updateSenha(Request $request) {
       
    }
}
