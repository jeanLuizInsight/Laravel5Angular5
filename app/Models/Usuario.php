<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Enums\TipoPermissaoType;
use Log;

class Usuario extends Authenticatable implements JWTSubject {
    use Notifiable;
    protected $table = 'usuario';
    protected $primaryKey = 'codigo';

    /* Objets Serialization */
    protected $with = array('perfil');

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'codigo', 
        'nome', 
        'email', 
        'password', 
        'situacao', 
        'bloqueado', 
        'admin', 
        'representante', 
        'moderador', 
        'jogador',
        'avatar',
        'exige_cadastro_senha'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'data_cadastro_senha', 'confirm_token'
    ];

    /**
     * Método responsavel por validar entrada de login do Usuário.
     *
     * @return void
     */
    public static function getMessagesValidationLogin() {
        $messsages = array(
            'email.required' => 'O e-mail é obrigatório!',
            'password.required' => 'A senha é obrigatória!',
            'password.min' => 'Digite uma senha com no mínimo 8 caracteres!',
        );
        return $messsages;
    }

    /**
     * Método responsavel por validar entrada de cadastro do Usuário.
     *
     * @return void
     */
    public static function getMessagesValidationSignup() {
        $messsages = array(
            'email.required' => 'O e-mail é obrigatório!',
            'password.required' => 'A senha é obrigatória!',
            'password.min' => 'Digite uma senha com no mínimo 8 caracteres!',
            'nome.required' => 'O nome é obrigatório!',
            'token.required' => 'Token de segurança inválido!',
        );
        return $messsages;
    }

    /**
    * Get the identifier that will be stored in the subject claim of the JWT
    *
    * @return mixed
    */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

   /**
    * Return a key value array, containing any custom claims to be added to the JWT
    *
    * @return array
    */
    public function getJWTCustomClaims() {
        return [
            //'per' => $this->getPermissoesForToken()
        ];
    }

    /**
     * Retorna as permissoes do usuario one to Many
     * 
     * @return array
     */
    public function permissoesJogador() {
        return $this->hasMany(Permissao::class, 'usuario_codigo')->where('tipo_permissao_codigo', TipoPermissaoType::JOGADOR)->orderBy('empresa_codigo');
    }

    /**
     * Retorna os jogadores do usuario one to Many
     * 
     * @return array
     */
    public function jogadorAll() {
        return $this->hasMany(Jogador::class, 'usuario_codigo');
    }

    /**
     * Retorna o perfil do usuario one to One
     * 
     * @return array
     */
    public function perfil() {
        return $this->hasOne(Perfil::class, 'usuario_codigo');
    }

    /**
     * Mutator email
     */
    public function setEmail($value) {
        $this->attributes['email'] = strtolower($value);
    }

    /**
     * Monta as permiissões que serão armazenadas no token
     * 
     * @return array
     */
    private function getPermissoesForToken() {
        $ret = array();
        $codigo = 0;
        $nome = "";
        $tiposPermissao = array();
        $permissoes = $this->permissaoAll;
        $codigoEmpresa = 0;
        // será preciso agrupar as permissões por empresa...
        foreach ($permissoes as $per) {
            if ($codigoEmpresa == $per->empresa->codigo) {
                array_push($tiposPermissao, $per->tipoPermissao->nome);
            } else if($codigoEmpresa == 0) {
                // primeira empresa na lista...
                $codigoEmpresa = $per->empresa->codigo;
                $codigo = $per->empresa->codigo;
                $nome = $per->empresa->nome_fantasia;
                array_push($tiposPermissao, $per->tipoPermissao->nome);
            } else {
                // nova empresa...
                array_push($ret, (object) array('codigo' => $codigo, 'nome' => $nome, 'tiposPermissao' => $tiposPermissao));
                
                $tiposPermissao = array();
                $codigoEmpresa = $per->empresa->codigo;
                $codigo = $per->empresa->codigo;
                $nome = $per->empresa->nome_fantasia;
                array_push($tiposPermissao, $per->tipoPermissao->nome);
            }
        }
        // ultima empresa na lista...
        array_push($ret, (object) array('codigo' => $codigo, 'nome' => $nome, 'tiposPermissao' => $tiposPermissao));
        return $ret;
    }
}
